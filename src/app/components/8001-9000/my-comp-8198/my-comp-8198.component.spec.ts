import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8198Component } from './my-comp-8198.component';

describe('MyComp8198Component', () => {
  let component: MyComp8198Component;
  let fixture: ComponentFixture<MyComp8198Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8198Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
