import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6008Component } from './my-comp-6008.component';

describe('MyComp6008Component', () => {
  let component: MyComp6008Component;
  let fixture: ComponentFixture<MyComp6008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
