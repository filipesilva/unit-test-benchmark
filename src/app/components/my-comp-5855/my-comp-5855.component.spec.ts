import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5855Component } from './my-comp-5855.component';

describe('MyComp5855Component', () => {
  let component: MyComp5855Component;
  let fixture: ComponentFixture<MyComp5855Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5855Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
