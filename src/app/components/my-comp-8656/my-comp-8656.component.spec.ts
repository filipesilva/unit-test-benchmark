import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8656Component } from './my-comp-8656.component';

describe('MyComp8656Component', () => {
  let component: MyComp8656Component;
  let fixture: ComponentFixture<MyComp8656Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8656Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
