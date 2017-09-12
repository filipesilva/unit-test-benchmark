import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6620Component } from './my-comp-6620.component';

describe('MyComp6620Component', () => {
  let component: MyComp6620Component;
  let fixture: ComponentFixture<MyComp6620Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6620Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
