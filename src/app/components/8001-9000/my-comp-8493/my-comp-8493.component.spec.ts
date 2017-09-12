import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8493Component } from './my-comp-8493.component';

describe('MyComp8493Component', () => {
  let component: MyComp8493Component;
  let fixture: ComponentFixture<MyComp8493Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8493Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
