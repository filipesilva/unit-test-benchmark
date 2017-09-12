import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8732Component } from './my-comp-8732.component';

describe('MyComp8732Component', () => {
  let component: MyComp8732Component;
  let fixture: ComponentFixture<MyComp8732Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8732Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
