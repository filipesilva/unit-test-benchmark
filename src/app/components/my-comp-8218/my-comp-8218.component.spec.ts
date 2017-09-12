import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8218Component } from './my-comp-8218.component';

describe('MyComp8218Component', () => {
  let component: MyComp8218Component;
  let fixture: ComponentFixture<MyComp8218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8218Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
