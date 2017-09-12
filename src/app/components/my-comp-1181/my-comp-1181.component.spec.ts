import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1181Component } from './my-comp-1181.component';

describe('MyComp1181Component', () => {
  let component: MyComp1181Component;
  let fixture: ComponentFixture<MyComp1181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
