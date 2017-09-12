import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6209Component } from './my-comp-6209.component';

describe('MyComp6209Component', () => {
  let component: MyComp6209Component;
  let fixture: ComponentFixture<MyComp6209Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6209Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
