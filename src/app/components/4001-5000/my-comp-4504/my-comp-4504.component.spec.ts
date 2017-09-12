import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4504Component } from './my-comp-4504.component';

describe('MyComp4504Component', () => {
  let component: MyComp4504Component;
  let fixture: ComponentFixture<MyComp4504Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4504Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
