import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2974Component } from './my-comp-2974.component';

describe('MyComp2974Component', () => {
  let component: MyComp2974Component;
  let fixture: ComponentFixture<MyComp2974Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2974Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
