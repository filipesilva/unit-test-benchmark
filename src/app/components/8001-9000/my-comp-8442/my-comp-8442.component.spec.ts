import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8442Component } from './my-comp-8442.component';

describe('MyComp8442Component', () => {
  let component: MyComp8442Component;
  let fixture: ComponentFixture<MyComp8442Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8442Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
