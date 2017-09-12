import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8045Component } from './my-comp-8045.component';

describe('MyComp8045Component', () => {
  let component: MyComp8045Component;
  let fixture: ComponentFixture<MyComp8045Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8045Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8045Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
