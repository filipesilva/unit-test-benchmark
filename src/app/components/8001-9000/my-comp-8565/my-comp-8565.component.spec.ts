import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8565Component } from './my-comp-8565.component';

describe('MyComp8565Component', () => {
  let component: MyComp8565Component;
  let fixture: ComponentFixture<MyComp8565Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8565Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
