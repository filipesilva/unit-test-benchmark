import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8342Component } from './my-comp-8342.component';

describe('MyComp8342Component', () => {
  let component: MyComp8342Component;
  let fixture: ComponentFixture<MyComp8342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8342Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
