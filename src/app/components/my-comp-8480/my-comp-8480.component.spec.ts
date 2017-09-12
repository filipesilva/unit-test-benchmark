import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8480Component } from './my-comp-8480.component';

describe('MyComp8480Component', () => {
  let component: MyComp8480Component;
  let fixture: ComponentFixture<MyComp8480Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8480Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
