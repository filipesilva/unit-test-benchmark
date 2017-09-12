import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1140Component } from './my-comp-1140.component';

describe('MyComp1140Component', () => {
  let component: MyComp1140Component;
  let fixture: ComponentFixture<MyComp1140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1140Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
