import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2181Component } from './my-comp-2181.component';

describe('MyComp2181Component', () => {
  let component: MyComp2181Component;
  let fixture: ComponentFixture<MyComp2181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
