import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8225Component } from './my-comp-8225.component';

describe('MyComp8225Component', () => {
  let component: MyComp8225Component;
  let fixture: ComponentFixture<MyComp8225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
