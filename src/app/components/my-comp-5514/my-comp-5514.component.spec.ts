import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5514Component } from './my-comp-5514.component';

describe('MyComp5514Component', () => {
  let component: MyComp5514Component;
  let fixture: ComponentFixture<MyComp5514Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5514Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
