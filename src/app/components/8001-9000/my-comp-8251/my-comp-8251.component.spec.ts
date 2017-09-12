import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8251Component } from './my-comp-8251.component';

describe('MyComp8251Component', () => {
  let component: MyComp8251Component;
  let fixture: ComponentFixture<MyComp8251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
