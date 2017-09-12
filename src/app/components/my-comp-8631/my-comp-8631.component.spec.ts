import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8631Component } from './my-comp-8631.component';

describe('MyComp8631Component', () => {
  let component: MyComp8631Component;
  let fixture: ComponentFixture<MyComp8631Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8631Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
