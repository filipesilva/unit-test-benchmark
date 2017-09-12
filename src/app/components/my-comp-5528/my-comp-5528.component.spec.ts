import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5528Component } from './my-comp-5528.component';

describe('MyComp5528Component', () => {
  let component: MyComp5528Component;
  let fixture: ComponentFixture<MyComp5528Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5528Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
