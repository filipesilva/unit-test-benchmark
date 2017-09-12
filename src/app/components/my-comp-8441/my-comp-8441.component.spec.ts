import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8441Component } from './my-comp-8441.component';

describe('MyComp8441Component', () => {
  let component: MyComp8441Component;
  let fixture: ComponentFixture<MyComp8441Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8441Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
