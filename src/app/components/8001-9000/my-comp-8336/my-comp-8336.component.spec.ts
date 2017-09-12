import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8336Component } from './my-comp-8336.component';

describe('MyComp8336Component', () => {
  let component: MyComp8336Component;
  let fixture: ComponentFixture<MyComp8336Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8336Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
