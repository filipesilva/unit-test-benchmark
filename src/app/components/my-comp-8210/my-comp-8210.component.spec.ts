import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8210Component } from './my-comp-8210.component';

describe('MyComp8210Component', () => {
  let component: MyComp8210Component;
  let fixture: ComponentFixture<MyComp8210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8210Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
