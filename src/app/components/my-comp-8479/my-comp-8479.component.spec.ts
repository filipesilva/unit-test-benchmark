import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8479Component } from './my-comp-8479.component';

describe('MyComp8479Component', () => {
  let component: MyComp8479Component;
  let fixture: ComponentFixture<MyComp8479Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8479Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
