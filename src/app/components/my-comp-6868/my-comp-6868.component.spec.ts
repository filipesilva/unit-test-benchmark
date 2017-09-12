import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6868Component } from './my-comp-6868.component';

describe('MyComp6868Component', () => {
  let component: MyComp6868Component;
  let fixture: ComponentFixture<MyComp6868Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6868Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
