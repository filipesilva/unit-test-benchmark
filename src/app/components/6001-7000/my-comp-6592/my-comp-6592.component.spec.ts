import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6592Component } from './my-comp-6592.component';

describe('MyComp6592Component', () => {
  let component: MyComp6592Component;
  let fixture: ComponentFixture<MyComp6592Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6592Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
