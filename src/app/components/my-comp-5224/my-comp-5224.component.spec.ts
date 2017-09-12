import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5224Component } from './my-comp-5224.component';

describe('MyComp5224Component', () => {
  let component: MyComp5224Component;
  let fixture: ComponentFixture<MyComp5224Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5224Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
