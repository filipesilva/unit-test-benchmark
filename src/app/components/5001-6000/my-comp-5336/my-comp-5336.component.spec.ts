import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5336Component } from './my-comp-5336.component';

describe('MyComp5336Component', () => {
  let component: MyComp5336Component;
  let fixture: ComponentFixture<MyComp5336Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5336Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
