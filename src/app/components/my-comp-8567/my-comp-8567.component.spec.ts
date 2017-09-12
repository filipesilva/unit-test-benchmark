import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8567Component } from './my-comp-8567.component';

describe('MyComp8567Component', () => {
  let component: MyComp8567Component;
  let fixture: ComponentFixture<MyComp8567Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8567Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
