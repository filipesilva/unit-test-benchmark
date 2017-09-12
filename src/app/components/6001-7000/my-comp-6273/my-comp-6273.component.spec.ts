import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6273Component } from './my-comp-6273.component';

describe('MyComp6273Component', () => {
  let component: MyComp6273Component;
  let fixture: ComponentFixture<MyComp6273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6273Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
