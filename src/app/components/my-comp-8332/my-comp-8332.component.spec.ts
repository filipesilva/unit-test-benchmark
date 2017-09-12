import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8332Component } from './my-comp-8332.component';

describe('MyComp8332Component', () => {
  let component: MyComp8332Component;
  let fixture: ComponentFixture<MyComp8332Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8332Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
