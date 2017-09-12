import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5747Component } from './my-comp-5747.component';

describe('MyComp5747Component', () => {
  let component: MyComp5747Component;
  let fixture: ComponentFixture<MyComp5747Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5747Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
