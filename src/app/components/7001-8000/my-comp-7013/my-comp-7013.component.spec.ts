import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7013Component } from './my-comp-7013.component';

describe('MyComp7013Component', () => {
  let component: MyComp7013Component;
  let fixture: ComponentFixture<MyComp7013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
