import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5709Component } from './my-comp-5709.component';

describe('MyComp5709Component', () => {
  let component: MyComp5709Component;
  let fixture: ComponentFixture<MyComp5709Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5709Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
