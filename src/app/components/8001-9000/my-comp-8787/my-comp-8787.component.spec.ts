import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8787Component } from './my-comp-8787.component';

describe('MyComp8787Component', () => {
  let component: MyComp8787Component;
  let fixture: ComponentFixture<MyComp8787Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8787Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
