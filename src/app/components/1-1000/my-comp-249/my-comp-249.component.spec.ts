import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp249Component } from './my-comp-249.component';

describe('MyComp249Component', () => {
  let component: MyComp249Component;
  let fixture: ComponentFixture<MyComp249Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp249Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
