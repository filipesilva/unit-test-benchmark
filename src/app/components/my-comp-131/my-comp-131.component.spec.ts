import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp131Component } from './my-comp-131.component';

describe('MyComp131Component', () => {
  let component: MyComp131Component;
  let fixture: ComponentFixture<MyComp131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
