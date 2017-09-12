import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6874Component } from './my-comp-6874.component';

describe('MyComp6874Component', () => {
  let component: MyComp6874Component;
  let fixture: ComponentFixture<MyComp6874Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6874Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
