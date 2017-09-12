import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5682Component } from './my-comp-5682.component';

describe('MyComp5682Component', () => {
  let component: MyComp5682Component;
  let fixture: ComponentFixture<MyComp5682Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5682Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
