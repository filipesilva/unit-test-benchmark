import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8311Component } from './my-comp-8311.component';

describe('MyComp8311Component', () => {
  let component: MyComp8311Component;
  let fixture: ComponentFixture<MyComp8311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
