import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4946Component } from './my-comp-4946.component';

describe('MyComp4946Component', () => {
  let component: MyComp4946Component;
  let fixture: ComponentFixture<MyComp4946Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4946Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
