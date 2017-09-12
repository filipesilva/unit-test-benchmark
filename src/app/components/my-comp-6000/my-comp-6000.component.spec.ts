import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6000Component } from './my-comp-6000.component';

describe('MyComp6000Component', () => {
  let component: MyComp6000Component;
  let fixture: ComponentFixture<MyComp6000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
