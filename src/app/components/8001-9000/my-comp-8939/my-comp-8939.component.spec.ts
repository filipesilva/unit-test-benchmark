import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8939Component } from './my-comp-8939.component';

describe('MyComp8939Component', () => {
  let component: MyComp8939Component;
  let fixture: ComponentFixture<MyComp8939Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8939Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
