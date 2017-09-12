import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5716Component } from './my-comp-5716.component';

describe('MyComp5716Component', () => {
  let component: MyComp5716Component;
  let fixture: ComponentFixture<MyComp5716Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5716Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
