import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1758Component } from './my-comp-1758.component';

describe('MyComp1758Component', () => {
  let component: MyComp1758Component;
  let fixture: ComponentFixture<MyComp1758Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1758Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
