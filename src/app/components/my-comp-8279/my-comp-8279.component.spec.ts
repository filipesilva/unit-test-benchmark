import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8279Component } from './my-comp-8279.component';

describe('MyComp8279Component', () => {
  let component: MyComp8279Component;
  let fixture: ComponentFixture<MyComp8279Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8279Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
