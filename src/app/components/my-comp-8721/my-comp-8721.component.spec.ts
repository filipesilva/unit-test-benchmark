import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8721Component } from './my-comp-8721.component';

describe('MyComp8721Component', () => {
  let component: MyComp8721Component;
  let fixture: ComponentFixture<MyComp8721Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8721Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
