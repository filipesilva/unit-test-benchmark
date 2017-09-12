import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2099Component } from './my-comp-2099.component';

describe('MyComp2099Component', () => {
  let component: MyComp2099Component;
  let fixture: ComponentFixture<MyComp2099Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2099Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2099Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
