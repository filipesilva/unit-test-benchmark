import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8807Component } from './my-comp-8807.component';

describe('MyComp8807Component', () => {
  let component: MyComp8807Component;
  let fixture: ComponentFixture<MyComp8807Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8807Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
