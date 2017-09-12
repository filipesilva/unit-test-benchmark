import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5761Component } from './my-comp-5761.component';

describe('MyComp5761Component', () => {
  let component: MyComp5761Component;
  let fixture: ComponentFixture<MyComp5761Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5761Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
