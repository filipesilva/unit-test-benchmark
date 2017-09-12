import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1861Component } from './my-comp-1861.component';

describe('MyComp1861Component', () => {
  let component: MyComp1861Component;
  let fixture: ComponentFixture<MyComp1861Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1861Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
