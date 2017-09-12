import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6234Component } from './my-comp-6234.component';

describe('MyComp6234Component', () => {
  let component: MyComp6234Component;
  let fixture: ComponentFixture<MyComp6234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
