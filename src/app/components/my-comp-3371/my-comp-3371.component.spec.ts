import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3371Component } from './my-comp-3371.component';

describe('MyComp3371Component', () => {
  let component: MyComp3371Component;
  let fixture: ComponentFixture<MyComp3371Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3371Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
