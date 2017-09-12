import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8244Component } from './my-comp-8244.component';

describe('MyComp8244Component', () => {
  let component: MyComp8244Component;
  let fixture: ComponentFixture<MyComp8244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8244Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
