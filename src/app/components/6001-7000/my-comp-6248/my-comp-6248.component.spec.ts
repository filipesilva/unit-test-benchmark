import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6248Component } from './my-comp-6248.component';

describe('MyComp6248Component', () => {
  let component: MyComp6248Component;
  let fixture: ComponentFixture<MyComp6248Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6248Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
