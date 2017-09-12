import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8572Component } from './my-comp-8572.component';

describe('MyComp8572Component', () => {
  let component: MyComp8572Component;
  let fixture: ComponentFixture<MyComp8572Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8572Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
