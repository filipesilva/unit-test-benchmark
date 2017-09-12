import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3075Component } from './my-comp-3075.component';

describe('MyComp3075Component', () => {
  let component: MyComp3075Component;
  let fixture: ComponentFixture<MyComp3075Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3075Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3075Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
