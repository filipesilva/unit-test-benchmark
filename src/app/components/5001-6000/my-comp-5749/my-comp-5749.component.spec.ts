import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5749Component } from './my-comp-5749.component';

describe('MyComp5749Component', () => {
  let component: MyComp5749Component;
  let fixture: ComponentFixture<MyComp5749Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5749Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
