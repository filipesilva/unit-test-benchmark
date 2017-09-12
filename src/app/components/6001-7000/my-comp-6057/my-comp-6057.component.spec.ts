import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6057Component } from './my-comp-6057.component';

describe('MyComp6057Component', () => {
  let component: MyComp6057Component;
  let fixture: ComponentFixture<MyComp6057Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6057Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6057Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
