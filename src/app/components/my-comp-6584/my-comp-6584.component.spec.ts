import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6584Component } from './my-comp-6584.component';

describe('MyComp6584Component', () => {
  let component: MyComp6584Component;
  let fixture: ComponentFixture<MyComp6584Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6584Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
