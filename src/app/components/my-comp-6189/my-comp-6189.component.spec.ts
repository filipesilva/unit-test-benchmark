import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6189Component } from './my-comp-6189.component';

describe('MyComp6189Component', () => {
  let component: MyComp6189Component;
  let fixture: ComponentFixture<MyComp6189Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6189Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
