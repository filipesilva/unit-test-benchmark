import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8366Component } from './my-comp-8366.component';

describe('MyComp8366Component', () => {
  let component: MyComp8366Component;
  let fixture: ComponentFixture<MyComp8366Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8366Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
