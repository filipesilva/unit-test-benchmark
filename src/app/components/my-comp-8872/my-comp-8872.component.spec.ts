import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8872Component } from './my-comp-8872.component';

describe('MyComp8872Component', () => {
  let component: MyComp8872Component;
  let fixture: ComponentFixture<MyComp8872Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8872Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
