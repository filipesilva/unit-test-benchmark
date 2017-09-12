import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8862Component } from './my-comp-8862.component';

describe('MyComp8862Component', () => {
  let component: MyComp8862Component;
  let fixture: ComponentFixture<MyComp8862Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8862Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
