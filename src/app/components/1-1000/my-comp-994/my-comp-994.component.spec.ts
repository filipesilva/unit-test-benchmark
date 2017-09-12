import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp994Component } from './my-comp-994.component';

describe('MyComp994Component', () => {
  let component: MyComp994Component;
  let fixture: ComponentFixture<MyComp994Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp994Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
