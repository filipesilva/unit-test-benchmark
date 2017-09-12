import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8050Component } from './my-comp-8050.component';

describe('MyComp8050Component', () => {
  let component: MyComp8050Component;
  let fixture: ComponentFixture<MyComp8050Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8050Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
