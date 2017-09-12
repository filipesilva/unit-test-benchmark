import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5280Component } from './my-comp-5280.component';

describe('MyComp5280Component', () => {
  let component: MyComp5280Component;
  let fixture: ComponentFixture<MyComp5280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
