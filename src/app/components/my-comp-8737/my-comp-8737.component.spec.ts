import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8737Component } from './my-comp-8737.component';

describe('MyComp8737Component', () => {
  let component: MyComp8737Component;
  let fixture: ComponentFixture<MyComp8737Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8737Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
