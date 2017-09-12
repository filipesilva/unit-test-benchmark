import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8985Component } from './my-comp-8985.component';

describe('MyComp8985Component', () => {
  let component: MyComp8985Component;
  let fixture: ComponentFixture<MyComp8985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8985Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
