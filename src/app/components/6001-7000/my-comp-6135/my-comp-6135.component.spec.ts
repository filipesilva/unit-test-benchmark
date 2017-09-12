import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6135Component } from './my-comp-6135.component';

describe('MyComp6135Component', () => {
  let component: MyComp6135Component;
  let fixture: ComponentFixture<MyComp6135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
