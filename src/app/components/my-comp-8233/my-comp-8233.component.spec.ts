import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8233Component } from './my-comp-8233.component';

describe('MyComp8233Component', () => {
  let component: MyComp8233Component;
  let fixture: ComponentFixture<MyComp8233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
