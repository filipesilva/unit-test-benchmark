import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8712Component } from './my-comp-8712.component';

describe('MyComp8712Component', () => {
  let component: MyComp8712Component;
  let fixture: ComponentFixture<MyComp8712Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8712Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
