import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8490Component } from './my-comp-8490.component';

describe('MyComp8490Component', () => {
  let component: MyComp8490Component;
  let fixture: ComponentFixture<MyComp8490Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8490Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
