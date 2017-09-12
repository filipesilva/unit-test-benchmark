import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8291Component } from './my-comp-8291.component';

describe('MyComp8291Component', () => {
  let component: MyComp8291Component;
  let fixture: ComponentFixture<MyComp8291Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
