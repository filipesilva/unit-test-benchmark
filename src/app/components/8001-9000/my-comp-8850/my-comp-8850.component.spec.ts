import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8850Component } from './my-comp-8850.component';

describe('MyComp8850Component', () => {
  let component: MyComp8850Component;
  let fixture: ComponentFixture<MyComp8850Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8850Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
