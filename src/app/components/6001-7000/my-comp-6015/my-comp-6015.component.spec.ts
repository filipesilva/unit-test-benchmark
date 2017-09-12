import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6015Component } from './my-comp-6015.component';

describe('MyComp6015Component', () => {
  let component: MyComp6015Component;
  let fixture: ComponentFixture<MyComp6015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
