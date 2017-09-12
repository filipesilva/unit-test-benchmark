import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1845Component } from './my-comp-1845.component';

describe('MyComp1845Component', () => {
  let component: MyComp1845Component;
  let fixture: ComponentFixture<MyComp1845Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1845Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
