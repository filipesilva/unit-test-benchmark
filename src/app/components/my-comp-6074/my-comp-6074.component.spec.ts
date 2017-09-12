import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6074Component } from './my-comp-6074.component';

describe('MyComp6074Component', () => {
  let component: MyComp6074Component;
  let fixture: ComponentFixture<MyComp6074Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6074Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6074Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
