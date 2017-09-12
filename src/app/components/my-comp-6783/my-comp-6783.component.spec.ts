import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6783Component } from './my-comp-6783.component';

describe('MyComp6783Component', () => {
  let component: MyComp6783Component;
  let fixture: ComponentFixture<MyComp6783Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6783Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
