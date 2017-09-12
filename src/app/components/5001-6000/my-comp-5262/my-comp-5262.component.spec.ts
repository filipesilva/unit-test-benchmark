import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5262Component } from './my-comp-5262.component';

describe('MyComp5262Component', () => {
  let component: MyComp5262Component;
  let fixture: ComponentFixture<MyComp5262Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5262Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
