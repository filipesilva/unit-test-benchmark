import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1173Component } from './my-comp-1173.component';

describe('MyComp1173Component', () => {
  let component: MyComp1173Component;
  let fixture: ComponentFixture<MyComp1173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
