import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4914Component } from './my-comp-4914.component';

describe('MyComp4914Component', () => {
  let component: MyComp4914Component;
  let fixture: ComponentFixture<MyComp4914Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4914Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
