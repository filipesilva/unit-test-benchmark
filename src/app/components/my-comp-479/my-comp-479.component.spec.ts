import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp479Component } from './my-comp-479.component';

describe('MyComp479Component', () => {
  let component: MyComp479Component;
  let fixture: ComponentFixture<MyComp479Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp479Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
