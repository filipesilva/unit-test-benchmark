import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5107Component } from './my-comp-5107.component';

describe('MyComp5107Component', () => {
  let component: MyComp5107Component;
  let fixture: ComponentFixture<MyComp5107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
