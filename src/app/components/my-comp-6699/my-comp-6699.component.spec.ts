import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6699Component } from './my-comp-6699.component';

describe('MyComp6699Component', () => {
  let component: MyComp6699Component;
  let fixture: ComponentFixture<MyComp6699Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6699Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
