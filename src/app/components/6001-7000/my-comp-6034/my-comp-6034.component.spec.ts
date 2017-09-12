import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6034Component } from './my-comp-6034.component';

describe('MyComp6034Component', () => {
  let component: MyComp6034Component;
  let fixture: ComponentFixture<MyComp6034Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6034Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6034Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
