import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5851Component } from './my-comp-5851.component';

describe('MyComp5851Component', () => {
  let component: MyComp5851Component;
  let fixture: ComponentFixture<MyComp5851Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5851Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
