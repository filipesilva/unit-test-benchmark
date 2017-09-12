import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8951Component } from './my-comp-8951.component';

describe('MyComp8951Component', () => {
  let component: MyComp8951Component;
  let fixture: ComponentFixture<MyComp8951Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8951Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
