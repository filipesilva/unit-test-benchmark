import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp708Component } from './my-comp-708.component';

describe('MyComp708Component', () => {
  let component: MyComp708Component;
  let fixture: ComponentFixture<MyComp708Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp708Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
