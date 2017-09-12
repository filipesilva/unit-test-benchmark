import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8868Component } from './my-comp-8868.component';

describe('MyComp8868Component', () => {
  let component: MyComp8868Component;
  let fixture: ComponentFixture<MyComp8868Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8868Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
