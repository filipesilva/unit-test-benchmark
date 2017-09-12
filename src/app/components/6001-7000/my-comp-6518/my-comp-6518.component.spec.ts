import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6518Component } from './my-comp-6518.component';

describe('MyComp6518Component', () => {
  let component: MyComp6518Component;
  let fixture: ComponentFixture<MyComp6518Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6518Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
