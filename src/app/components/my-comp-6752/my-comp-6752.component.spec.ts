import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6752Component } from './my-comp-6752.component';

describe('MyComp6752Component', () => {
  let component: MyComp6752Component;
  let fixture: ComponentFixture<MyComp6752Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6752Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
