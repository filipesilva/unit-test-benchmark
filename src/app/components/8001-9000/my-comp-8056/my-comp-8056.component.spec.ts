import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8056Component } from './my-comp-8056.component';

describe('MyComp8056Component', () => {
  let component: MyComp8056Component;
  let fixture: ComponentFixture<MyComp8056Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8056Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8056Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
