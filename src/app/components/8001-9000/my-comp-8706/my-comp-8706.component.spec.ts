import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8706Component } from './my-comp-8706.component';

describe('MyComp8706Component', () => {
  let component: MyComp8706Component;
  let fixture: ComponentFixture<MyComp8706Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8706Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
