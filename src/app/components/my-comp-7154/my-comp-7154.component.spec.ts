import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7154Component } from './my-comp-7154.component';

describe('MyComp7154Component', () => {
  let component: MyComp7154Component;
  let fixture: ComponentFixture<MyComp7154Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7154Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
