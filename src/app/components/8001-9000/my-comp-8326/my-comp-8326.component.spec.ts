import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8326Component } from './my-comp-8326.component';

describe('MyComp8326Component', () => {
  let component: MyComp8326Component;
  let fixture: ComponentFixture<MyComp8326Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8326Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
