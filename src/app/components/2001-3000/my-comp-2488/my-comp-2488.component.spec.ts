import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2488Component } from './my-comp-2488.component';

describe('MyComp2488Component', () => {
  let component: MyComp2488Component;
  let fixture: ComponentFixture<MyComp2488Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2488Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
