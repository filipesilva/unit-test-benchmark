import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8875Component } from './my-comp-8875.component';

describe('MyComp8875Component', () => {
  let component: MyComp8875Component;
  let fixture: ComponentFixture<MyComp8875Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8875Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
