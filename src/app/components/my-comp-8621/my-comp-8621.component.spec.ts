import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8621Component } from './my-comp-8621.component';

describe('MyComp8621Component', () => {
  let component: MyComp8621Component;
  let fixture: ComponentFixture<MyComp8621Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8621Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
