import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7196Component } from './my-comp-7196.component';

describe('MyComp7196Component', () => {
  let component: MyComp7196Component;
  let fixture: ComponentFixture<MyComp7196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7196Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
