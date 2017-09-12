import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8363Component } from './my-comp-8363.component';

describe('MyComp8363Component', () => {
  let component: MyComp8363Component;
  let fixture: ComponentFixture<MyComp8363Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8363Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
