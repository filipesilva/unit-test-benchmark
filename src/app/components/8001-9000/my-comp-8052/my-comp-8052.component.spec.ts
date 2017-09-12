import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8052Component } from './my-comp-8052.component';

describe('MyComp8052Component', () => {
  let component: MyComp8052Component;
  let fixture: ComponentFixture<MyComp8052Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8052Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
