import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8436Component } from './my-comp-8436.component';

describe('MyComp8436Component', () => {
  let component: MyComp8436Component;
  let fixture: ComponentFixture<MyComp8436Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8436Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
