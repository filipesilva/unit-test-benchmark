import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8981Component } from './my-comp-8981.component';

describe('MyComp8981Component', () => {
  let component: MyComp8981Component;
  let fixture: ComponentFixture<MyComp8981Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8981Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
