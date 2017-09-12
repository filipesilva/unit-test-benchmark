import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8585Component } from './my-comp-8585.component';

describe('MyComp8585Component', () => {
  let component: MyComp8585Component;
  let fixture: ComponentFixture<MyComp8585Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8585Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
