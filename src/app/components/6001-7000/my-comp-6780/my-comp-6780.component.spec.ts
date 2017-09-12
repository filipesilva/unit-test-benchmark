import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6780Component } from './my-comp-6780.component';

describe('MyComp6780Component', () => {
  let component: MyComp6780Component;
  let fixture: ComponentFixture<MyComp6780Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6780Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
