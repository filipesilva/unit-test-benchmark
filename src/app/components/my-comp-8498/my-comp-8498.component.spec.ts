import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8498Component } from './my-comp-8498.component';

describe('MyComp8498Component', () => {
  let component: MyComp8498Component;
  let fixture: ComponentFixture<MyComp8498Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8498Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
