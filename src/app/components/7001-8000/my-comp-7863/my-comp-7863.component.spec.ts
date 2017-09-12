import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7863Component } from './my-comp-7863.component';

describe('MyComp7863Component', () => {
  let component: MyComp7863Component;
  let fixture: ComponentFixture<MyComp7863Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7863Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
