import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7540Component } from './my-comp-7540.component';

describe('MyComp7540Component', () => {
  let component: MyComp7540Component;
  let fixture: ComponentFixture<MyComp7540Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7540Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
