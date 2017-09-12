import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4014Component } from './my-comp-4014.component';

describe('MyComp4014Component', () => {
  let component: MyComp4014Component;
  let fixture: ComponentFixture<MyComp4014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
