import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6753Component } from './my-comp-6753.component';

describe('MyComp6753Component', () => {
  let component: MyComp6753Component;
  let fixture: ComponentFixture<MyComp6753Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6753Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
