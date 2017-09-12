import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6353Component } from './my-comp-6353.component';

describe('MyComp6353Component', () => {
  let component: MyComp6353Component;
  let fixture: ComponentFixture<MyComp6353Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6353Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
