import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5096Component } from './my-comp-5096.component';

describe('MyComp5096Component', () => {
  let component: MyComp5096Component;
  let fixture: ComponentFixture<MyComp5096Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5096Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5096Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
