import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8359Component } from './my-comp-8359.component';

describe('MyComp8359Component', () => {
  let component: MyComp8359Component;
  let fixture: ComponentFixture<MyComp8359Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8359Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
