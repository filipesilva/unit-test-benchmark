import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4708Component } from './my-comp-4708.component';

describe('MyComp4708Component', () => {
  let component: MyComp4708Component;
  let fixture: ComponentFixture<MyComp4708Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4708Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
