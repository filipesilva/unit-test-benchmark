import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8641Component } from './my-comp-8641.component';

describe('MyComp8641Component', () => {
  let component: MyComp8641Component;
  let fixture: ComponentFixture<MyComp8641Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8641Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
