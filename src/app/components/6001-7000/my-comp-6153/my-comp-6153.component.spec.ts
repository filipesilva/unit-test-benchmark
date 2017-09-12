import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6153Component } from './my-comp-6153.component';

describe('MyComp6153Component', () => {
  let component: MyComp6153Component;
  let fixture: ComponentFixture<MyComp6153Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6153Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
