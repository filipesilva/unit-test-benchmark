import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8373Component } from './my-comp-8373.component';

describe('MyComp8373Component', () => {
  let component: MyComp8373Component;
  let fixture: ComponentFixture<MyComp8373Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8373Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
