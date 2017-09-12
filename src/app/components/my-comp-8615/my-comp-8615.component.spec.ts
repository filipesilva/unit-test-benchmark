import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8615Component } from './my-comp-8615.component';

describe('MyComp8615Component', () => {
  let component: MyComp8615Component;
  let fixture: ComponentFixture<MyComp8615Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8615Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
