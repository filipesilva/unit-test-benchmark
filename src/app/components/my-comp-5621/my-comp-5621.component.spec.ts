import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5621Component } from './my-comp-5621.component';

describe('MyComp5621Component', () => {
  let component: MyComp5621Component;
  let fixture: ComponentFixture<MyComp5621Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5621Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
