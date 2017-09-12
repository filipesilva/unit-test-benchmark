import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4716Component } from './my-comp-4716.component';

describe('MyComp4716Component', () => {
  let component: MyComp4716Component;
  let fixture: ComponentFixture<MyComp4716Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4716Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
