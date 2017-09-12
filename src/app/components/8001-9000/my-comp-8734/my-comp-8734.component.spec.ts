import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8734Component } from './my-comp-8734.component';

describe('MyComp8734Component', () => {
  let component: MyComp8734Component;
  let fixture: ComponentFixture<MyComp8734Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8734Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
