import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8029Component } from './my-comp-8029.component';

describe('MyComp8029Component', () => {
  let component: MyComp8029Component;
  let fixture: ComponentFixture<MyComp8029Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8029Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8029Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
