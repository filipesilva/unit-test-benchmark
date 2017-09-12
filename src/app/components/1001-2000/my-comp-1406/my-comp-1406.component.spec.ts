import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1406Component } from './my-comp-1406.component';

describe('MyComp1406Component', () => {
  let component: MyComp1406Component;
  let fixture: ComponentFixture<MyComp1406Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1406Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
