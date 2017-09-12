import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4223Component } from './my-comp-4223.component';

describe('MyComp4223Component', () => {
  let component: MyComp4223Component;
  let fixture: ComponentFixture<MyComp4223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
