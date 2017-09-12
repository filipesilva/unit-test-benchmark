import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8808Component } from './my-comp-8808.component';

describe('MyComp8808Component', () => {
  let component: MyComp8808Component;
  let fixture: ComponentFixture<MyComp8808Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8808Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
