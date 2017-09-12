import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8280Component } from './my-comp-8280.component';

describe('MyComp8280Component', () => {
  let component: MyComp8280Component;
  let fixture: ComponentFixture<MyComp8280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
