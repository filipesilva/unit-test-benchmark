import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2729Component } from './my-comp-2729.component';

describe('MyComp2729Component', () => {
  let component: MyComp2729Component;
  let fixture: ComponentFixture<MyComp2729Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2729Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
