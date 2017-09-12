import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1135Component } from './my-comp-1135.component';

describe('MyComp1135Component', () => {
  let component: MyComp1135Component;
  let fixture: ComponentFixture<MyComp1135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
