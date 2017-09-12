import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8687Component } from './my-comp-8687.component';

describe('MyComp8687Component', () => {
  let component: MyComp8687Component;
  let fixture: ComponentFixture<MyComp8687Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8687Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
