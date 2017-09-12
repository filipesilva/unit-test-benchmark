import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5860Component } from './my-comp-5860.component';

describe('MyComp5860Component', () => {
  let component: MyComp5860Component;
  let fixture: ComponentFixture<MyComp5860Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5860Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
