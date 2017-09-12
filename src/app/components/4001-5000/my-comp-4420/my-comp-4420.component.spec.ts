import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4420Component } from './my-comp-4420.component';

describe('MyComp4420Component', () => {
  let component: MyComp4420Component;
  let fixture: ComponentFixture<MyComp4420Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4420Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
