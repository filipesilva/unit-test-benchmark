import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8032Component } from './my-comp-8032.component';

describe('MyComp8032Component', () => {
  let component: MyComp8032Component;
  let fixture: ComponentFixture<MyComp8032Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8032Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8032Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
