import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8980Component } from './my-comp-8980.component';

describe('MyComp8980Component', () => {
  let component: MyComp8980Component;
  let fixture: ComponentFixture<MyComp8980Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8980Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
