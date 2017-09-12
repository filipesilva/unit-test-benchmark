import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5307Component } from './my-comp-5307.component';

describe('MyComp5307Component', () => {
  let component: MyComp5307Component;
  let fixture: ComponentFixture<MyComp5307Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5307Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
