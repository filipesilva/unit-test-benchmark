import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5341Component } from './my-comp-5341.component';

describe('MyComp5341Component', () => {
  let component: MyComp5341Component;
  let fixture: ComponentFixture<MyComp5341Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5341Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
