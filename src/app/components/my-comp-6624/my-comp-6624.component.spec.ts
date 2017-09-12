import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6624Component } from './my-comp-6624.component';

describe('MyComp6624Component', () => {
  let component: MyComp6624Component;
  let fixture: ComponentFixture<MyComp6624Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6624Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
