import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9200Component } from './my-comp-9200.component';

describe('MyComp9200Component', () => {
  let component: MyComp9200Component;
  let fixture: ComponentFixture<MyComp9200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
