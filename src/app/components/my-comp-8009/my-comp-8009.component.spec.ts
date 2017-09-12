import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8009Component } from './my-comp-8009.component';

describe('MyComp8009Component', () => {
  let component: MyComp8009Component;
  let fixture: ComponentFixture<MyComp8009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
