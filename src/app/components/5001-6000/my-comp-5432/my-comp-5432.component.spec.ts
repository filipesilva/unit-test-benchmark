import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5432Component } from './my-comp-5432.component';

describe('MyComp5432Component', () => {
  let component: MyComp5432Component;
  let fixture: ComponentFixture<MyComp5432Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5432Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
