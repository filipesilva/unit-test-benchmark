import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp414Component } from './my-comp-414.component';

describe('MyComp414Component', () => {
  let component: MyComp414Component;
  let fixture: ComponentFixture<MyComp414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
