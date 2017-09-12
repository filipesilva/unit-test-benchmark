import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8578Component } from './my-comp-8578.component';

describe('MyComp8578Component', () => {
  let component: MyComp8578Component;
  let fixture: ComponentFixture<MyComp8578Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8578Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
