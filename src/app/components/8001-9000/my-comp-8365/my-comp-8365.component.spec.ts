import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8365Component } from './my-comp-8365.component';

describe('MyComp8365Component', () => {
  let component: MyComp8365Component;
  let fixture: ComponentFixture<MyComp8365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8365Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
