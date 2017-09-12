import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8786Component } from './my-comp-8786.component';

describe('MyComp8786Component', () => {
  let component: MyComp8786Component;
  let fixture: ComponentFixture<MyComp8786Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8786Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
