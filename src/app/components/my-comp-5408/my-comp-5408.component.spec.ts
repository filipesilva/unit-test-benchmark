import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5408Component } from './my-comp-5408.component';

describe('MyComp5408Component', () => {
  let component: MyComp5408Component;
  let fixture: ComponentFixture<MyComp5408Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5408Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
