import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6139Component } from './my-comp-6139.component';

describe('MyComp6139Component', () => {
  let component: MyComp6139Component;
  let fixture: ComponentFixture<MyComp6139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
