import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3825Component } from './my-comp-3825.component';

describe('MyComp3825Component', () => {
  let component: MyComp3825Component;
  let fixture: ComponentFixture<MyComp3825Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3825Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
