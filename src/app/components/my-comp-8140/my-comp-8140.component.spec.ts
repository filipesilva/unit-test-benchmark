import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8140Component } from './my-comp-8140.component';

describe('MyComp8140Component', () => {
  let component: MyComp8140Component;
  let fixture: ComponentFixture<MyComp8140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8140Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
