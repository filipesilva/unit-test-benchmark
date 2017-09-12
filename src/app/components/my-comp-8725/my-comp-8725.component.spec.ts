import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8725Component } from './my-comp-8725.component';

describe('MyComp8725Component', () => {
  let component: MyComp8725Component;
  let fixture: ComponentFixture<MyComp8725Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8725Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
