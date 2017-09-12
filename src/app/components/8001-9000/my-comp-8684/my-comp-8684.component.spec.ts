import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8684Component } from './my-comp-8684.component';

describe('MyComp8684Component', () => {
  let component: MyComp8684Component;
  let fixture: ComponentFixture<MyComp8684Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8684Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
