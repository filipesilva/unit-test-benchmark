import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7505Component } from './my-comp-7505.component';

describe('MyComp7505Component', () => {
  let component: MyComp7505Component;
  let fixture: ComponentFixture<MyComp7505Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7505Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
