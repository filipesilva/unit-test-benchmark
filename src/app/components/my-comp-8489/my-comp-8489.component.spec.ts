import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8489Component } from './my-comp-8489.component';

describe('MyComp8489Component', () => {
  let component: MyComp8489Component;
  let fixture: ComponentFixture<MyComp8489Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8489Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
