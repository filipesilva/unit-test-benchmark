import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6760Component } from './my-comp-6760.component';

describe('MyComp6760Component', () => {
  let component: MyComp6760Component;
  let fixture: ComponentFixture<MyComp6760Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6760Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
