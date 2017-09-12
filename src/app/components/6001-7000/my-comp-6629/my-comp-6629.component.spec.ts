import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6629Component } from './my-comp-6629.component';

describe('MyComp6629Component', () => {
  let component: MyComp6629Component;
  let fixture: ComponentFixture<MyComp6629Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6629Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
