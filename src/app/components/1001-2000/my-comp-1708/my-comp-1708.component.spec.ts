import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1708Component } from './my-comp-1708.component';

describe('MyComp1708Component', () => {
  let component: MyComp1708Component;
  let fixture: ComponentFixture<MyComp1708Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1708Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
