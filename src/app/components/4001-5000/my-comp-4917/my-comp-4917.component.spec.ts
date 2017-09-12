import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4917Component } from './my-comp-4917.component';

describe('MyComp4917Component', () => {
  let component: MyComp4917Component;
  let fixture: ComponentFixture<MyComp4917Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4917Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
