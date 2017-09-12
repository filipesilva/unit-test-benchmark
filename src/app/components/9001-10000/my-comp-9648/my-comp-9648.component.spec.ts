import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9648Component } from './my-comp-9648.component';

describe('MyComp9648Component', () => {
  let component: MyComp9648Component;
  let fixture: ComponentFixture<MyComp9648Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9648Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
