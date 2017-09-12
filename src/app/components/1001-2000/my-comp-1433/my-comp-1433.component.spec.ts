import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1433Component } from './my-comp-1433.component';

describe('MyComp1433Component', () => {
  let component: MyComp1433Component;
  let fixture: ComponentFixture<MyComp1433Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1433Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
