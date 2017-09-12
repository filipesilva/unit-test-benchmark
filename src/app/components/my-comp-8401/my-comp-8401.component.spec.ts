import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8401Component } from './my-comp-8401.component';

describe('MyComp8401Component', () => {
  let component: MyComp8401Component;
  let fixture: ComponentFixture<MyComp8401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
