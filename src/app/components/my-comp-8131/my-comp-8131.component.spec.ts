import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8131Component } from './my-comp-8131.component';

describe('MyComp8131Component', () => {
  let component: MyComp8131Component;
  let fixture: ComponentFixture<MyComp8131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
