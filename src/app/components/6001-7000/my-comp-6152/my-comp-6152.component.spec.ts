import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6152Component } from './my-comp-6152.component';

describe('MyComp6152Component', () => {
  let component: MyComp6152Component;
  let fixture: ComponentFixture<MyComp6152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
