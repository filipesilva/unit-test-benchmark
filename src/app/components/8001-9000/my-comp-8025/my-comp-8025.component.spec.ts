import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8025Component } from './my-comp-8025.component';

describe('MyComp8025Component', () => {
  let component: MyComp8025Component;
  let fixture: ComponentFixture<MyComp8025Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8025Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
