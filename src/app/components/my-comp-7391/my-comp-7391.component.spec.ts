import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7391Component } from './my-comp-7391.component';

describe('MyComp7391Component', () => {
  let component: MyComp7391Component;
  let fixture: ComponentFixture<MyComp7391Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7391Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
