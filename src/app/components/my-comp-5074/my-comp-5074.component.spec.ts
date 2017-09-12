import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5074Component } from './my-comp-5074.component';

describe('MyComp5074Component', () => {
  let component: MyComp5074Component;
  let fixture: ComponentFixture<MyComp5074Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5074Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5074Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
