import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9376Component } from './my-comp-9376.component';

describe('MyComp9376Component', () => {
  let component: MyComp9376Component;
  let fixture: ComponentFixture<MyComp9376Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9376Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
