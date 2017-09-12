import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5417Component } from './my-comp-5417.component';

describe('MyComp5417Component', () => {
  let component: MyComp5417Component;
  let fixture: ComponentFixture<MyComp5417Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5417Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
