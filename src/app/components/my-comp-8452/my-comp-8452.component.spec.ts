import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8452Component } from './my-comp-8452.component';

describe('MyComp8452Component', () => {
  let component: MyComp8452Component;
  let fixture: ComponentFixture<MyComp8452Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8452Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
