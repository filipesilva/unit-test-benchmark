import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8372Component } from './my-comp-8372.component';

describe('MyComp8372Component', () => {
  let component: MyComp8372Component;
  let fixture: ComponentFixture<MyComp8372Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8372Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
