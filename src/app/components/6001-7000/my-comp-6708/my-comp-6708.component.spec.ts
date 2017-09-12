import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6708Component } from './my-comp-6708.component';

describe('MyComp6708Component', () => {
  let component: MyComp6708Component;
  let fixture: ComponentFixture<MyComp6708Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6708Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
