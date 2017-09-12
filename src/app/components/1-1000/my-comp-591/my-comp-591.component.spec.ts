import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp591Component } from './my-comp-591.component';

describe('MyComp591Component', () => {
  let component: MyComp591Component;
  let fixture: ComponentFixture<MyComp591Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp591Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
