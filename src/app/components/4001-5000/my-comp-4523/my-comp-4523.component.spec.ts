import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4523Component } from './my-comp-4523.component';

describe('MyComp4523Component', () => {
  let component: MyComp4523Component;
  let fixture: ComponentFixture<MyComp4523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4523Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
