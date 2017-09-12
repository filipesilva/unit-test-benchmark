import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8873Component } from './my-comp-8873.component';

describe('MyComp8873Component', () => {
  let component: MyComp8873Component;
  let fixture: ComponentFixture<MyComp8873Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8873Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
