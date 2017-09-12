import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5240Component } from './my-comp-5240.component';

describe('MyComp5240Component', () => {
  let component: MyComp5240Component;
  let fixture: ComponentFixture<MyComp5240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
