import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5433Component } from './my-comp-5433.component';

describe('MyComp5433Component', () => {
  let component: MyComp5433Component;
  let fixture: ComponentFixture<MyComp5433Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5433Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
