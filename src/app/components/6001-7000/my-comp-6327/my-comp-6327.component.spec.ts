import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6327Component } from './my-comp-6327.component';

describe('MyComp6327Component', () => {
  let component: MyComp6327Component;
  let fixture: ComponentFixture<MyComp6327Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6327Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
