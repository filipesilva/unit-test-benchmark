import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9412Component } from './my-comp-9412.component';

describe('MyComp9412Component', () => {
  let component: MyComp9412Component;
  let fixture: ComponentFixture<MyComp9412Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9412Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
