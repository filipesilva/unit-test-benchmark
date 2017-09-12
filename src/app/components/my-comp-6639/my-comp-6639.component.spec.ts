import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6639Component } from './my-comp-6639.component';

describe('MyComp6639Component', () => {
  let component: MyComp6639Component;
  let fixture: ComponentFixture<MyComp6639Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6639Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
