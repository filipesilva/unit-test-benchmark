import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8554Component } from './my-comp-8554.component';

describe('MyComp8554Component', () => {
  let component: MyComp8554Component;
  let fixture: ComponentFixture<MyComp8554Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8554Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
