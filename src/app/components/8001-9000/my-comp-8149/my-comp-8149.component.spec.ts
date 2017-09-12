import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8149Component } from './my-comp-8149.component';

describe('MyComp8149Component', () => {
  let component: MyComp8149Component;
  let fixture: ComponentFixture<MyComp8149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8149Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
