import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8761Component } from './my-comp-8761.component';

describe('MyComp8761Component', () => {
  let component: MyComp8761Component;
  let fixture: ComponentFixture<MyComp8761Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8761Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
