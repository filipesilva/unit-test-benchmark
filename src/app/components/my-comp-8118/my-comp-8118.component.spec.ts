import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8118Component } from './my-comp-8118.component';

describe('MyComp8118Component', () => {
  let component: MyComp8118Component;
  let fixture: ComponentFixture<MyComp8118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
