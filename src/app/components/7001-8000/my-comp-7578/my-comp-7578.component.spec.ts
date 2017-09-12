import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7578Component } from './my-comp-7578.component';

describe('MyComp7578Component', () => {
  let component: MyComp7578Component;
  let fixture: ComponentFixture<MyComp7578Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7578Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
