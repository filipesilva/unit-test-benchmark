import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6581Component } from './my-comp-6581.component';

describe('MyComp6581Component', () => {
  let component: MyComp6581Component;
  let fixture: ComponentFixture<MyComp6581Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6581Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
