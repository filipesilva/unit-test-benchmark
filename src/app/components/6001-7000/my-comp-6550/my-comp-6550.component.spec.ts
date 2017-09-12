import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6550Component } from './my-comp-6550.component';

describe('MyComp6550Component', () => {
  let component: MyComp6550Component;
  let fixture: ComponentFixture<MyComp6550Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6550Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
